// https://www.terraform.io/docs/providers/github/r/data_github_team.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubTeamConfig extends TerraformMetaArguments {
  readonly slug: string;
}

// Resource

export class DataGithubTeam extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // members - computed: true, optional: false, required: true
  public get members() {
    return this.getListAttribute('members');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: true
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // permission - computed: true, optional: false, required: true
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // privacy - computed: true, optional: false, required: true
  public get privacy() {
    return this.getStringAttribute('privacy');
  }

  // slug - computed: false, optional: false, required: true
  private _slug: string;
  public get slug() {
    return this._slug;
  }
  public set slug(value: string) {
    this._slug = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slug: this._slug,
    };
  }
}
