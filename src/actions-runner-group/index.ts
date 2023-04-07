// https://www.terraform.io/docs/providers/github/r/actions_runner_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#id ActionsRunnerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the runner group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#name ActionsRunnerGroup#name}
  */
  readonly name: string;
  /**
  * If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. Defaults to 'false'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}
  */
  readonly restrictedToWorkflows?: boolean | cdktf.IResolvable;
  /**
  * List of repository IDs that can access the runner group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}
  */
  readonly selectedRepositoryIds?: number[];
  /**
  * List of workflows the runner group should be allowed to run. This setting will be ignored unless restricted_to_workflows is set to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}
  */
  readonly selectedWorkflows?: string[];
  /**
  * The visibility of the runner group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#visibility ActionsRunnerGroup#visibility}
  */
  readonly visibility: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group github_actions_runner_group}
*/
export class ActionsRunnerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_runner_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group github_actions_runner_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsRunnerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsRunnerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_runner_group',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.21.1',
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
    this._id = config.id;
    this._name = config.name;
    this._restrictedToWorkflows = config.restrictedToWorkflows;
    this._selectedRepositoryIds = config.selectedRepositoryIds;
    this._selectedWorkflows = config.selectedWorkflows;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_public_repositories - computed: true, optional: false, required: false
  public get allowsPublicRepositories() {
    return this.getBooleanAttribute('allows_public_repositories');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // inherited - computed: true, optional: false, required: false
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // restricted_to_workflows - computed: false, optional: true, required: false
  private _restrictedToWorkflows?: boolean | cdktf.IResolvable; 
  public get restrictedToWorkflows() {
    return this.getBooleanAttribute('restricted_to_workflows');
  }
  public set restrictedToWorkflows(value: boolean | cdktf.IResolvable) {
    this._restrictedToWorkflows = value;
  }
  public resetRestrictedToWorkflows() {
    this._restrictedToWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedToWorkflowsInput() {
    return this._restrictedToWorkflows;
  }

  // runners_url - computed: true, optional: false, required: false
  public get runnersUrl() {
    return this.getStringAttribute('runners_url');
  }

  // selected_repositories_url - computed: true, optional: false, required: false
  public get selectedRepositoriesUrl() {
    return this.getStringAttribute('selected_repositories_url');
  }

  // selected_repository_ids - computed: false, optional: true, required: false
  private _selectedRepositoryIds?: number[]; 
  public get selectedRepositoryIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
  }
  public set selectedRepositoryIds(value: number[]) {
    this._selectedRepositoryIds = value;
  }
  public resetSelectedRepositoryIds() {
    this._selectedRepositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds;
  }

  // selected_workflows - computed: false, optional: true, required: false
  private _selectedWorkflows?: string[]; 
  public get selectedWorkflows() {
    return this.getListAttribute('selected_workflows');
  }
  public set selectedWorkflows(value: string[]) {
    this._selectedWorkflows = value;
  }
  public resetSelectedWorkflows() {
    this._selectedWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedWorkflowsInput() {
    return this._selectedWorkflows;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
      selected_workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedWorkflows),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }
}
