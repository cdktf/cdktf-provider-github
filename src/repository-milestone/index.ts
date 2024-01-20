/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryMilestoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the milestone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#description RepositoryMilestone#description}
  */
  readonly description?: string;
  /**
  * The milestone due date. In 'yyyy-mm-dd' format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#due_date RepositoryMilestone#due_date}
  */
  readonly dueDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#id RepositoryMilestone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The owner of the GitHub Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#owner RepositoryMilestone#owner}
  */
  readonly owner: string;
  /**
  * The name of the GitHub Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#repository RepositoryMilestone#repository}
  */
  readonly repository: string;
  /**
  * The state of the milestone. Either 'open' or 'closed'. Default: 'open'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#state RepositoryMilestone#state}
  */
  readonly state?: string;
  /**
  * The title of the milestone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#title RepositoryMilestone#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone github_repository_milestone}
*/
export class RepositoryMilestone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_milestone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryMilestone to import
  * @param importFromId The id of the existing RepositoryMilestone that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryMilestone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_milestone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/repository_milestone github_repository_milestone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryMilestoneConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryMilestoneConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_milestone',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.45.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dueDate = config.dueDate;
    this._id = config.id;
    this._owner = config.owner;
    this._repository = config.repository;
    this._state = config.state;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // due_date - computed: false, optional: true, required: false
  private _dueDate?: string; 
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public resetDueDate() {
    this._dueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDateInput() {
    return this._dueDate;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      due_date: cdktf.stringToTerraform(this._dueDate),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      due_date: {
        value: cdktf.stringToHclTerraform(this._dueDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
