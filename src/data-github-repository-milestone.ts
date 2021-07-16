// https://www.terraform.io/docs/providers/github/d/repository_milestone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryMilestoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_milestone.html#number DataGithubRepositoryMilestone#number}
  */
  readonly number: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_milestone.html#owner DataGithubRepositoryMilestone#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_milestone.html#repository DataGithubRepositoryMilestone#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_milestone.html github_repository_milestone}
*/
export class DataGithubRepositoryMilestone extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository_milestone.html github_repository_milestone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryMilestoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryMilestoneConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_milestone',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._number = config.number;
    this._owner = config.owner;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // number - computed: false, optional: false, required: true
  private _number: number;
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number
  }

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      number: cdktf.numberToTerraform(this._number),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
