// https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether public repositories can be added to the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}
  */
  readonly allowsPublicRepositories?: boolean | cdktf.IResolvable;
  /**
  * Name of the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}
  */
  readonly name: string;
  /**
  * If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}
  */
  readonly restrictedToWorkflows?: boolean | cdktf.IResolvable;
  /**
  * List of repository IDs that can access the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}
  */
  readonly selectedRepositoryIds?: number[];
  /**
  * List of workflows the runner group should be allowed to run. This setting will be ignored unless restricted_to_workflows is set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}
  */
  readonly selectedWorkflows?: string[];
  /**
  * The visibility of the runner group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}
  */
  readonly visibility: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group github_actions_runner_group}
*/
export class ActionsRunnerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_runner_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionsRunnerGroup to import
  * @param importFromId The id of the existing ActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionsRunnerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_runner_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/actions_runner_group github_actions_runner_group} Resource
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
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowsPublicRepositories = config.allowsPublicRepositories;
    this._name = config.name;
    this._restrictedToWorkflows = config.restrictedToWorkflows;
    this._selectedRepositoryIds = config.selectedRepositoryIds;
    this._selectedWorkflows = config.selectedWorkflows;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_public_repositories - computed: false, optional: true, required: false
  private _allowsPublicRepositories?: boolean | cdktf.IResolvable; 
  public get allowsPublicRepositories() {
    return this.getBooleanAttribute('allows_public_repositories');
  }
  public set allowsPublicRepositories(value: boolean | cdktf.IResolvable) {
    this._allowsPublicRepositories = value;
  }
  public resetAllowsPublicRepositories() {
    this._allowsPublicRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsPublicRepositoriesInput() {
    return this._allowsPublicRepositories;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      allows_public_repositories: cdktf.booleanToTerraform(this._allowsPublicRepositories),
      name: cdktf.stringToTerraform(this._name),
      restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
      selected_workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedWorkflows),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allows_public_repositories: {
        value: cdktf.booleanToHclTerraform(this._allowsPublicRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_to_workflows: {
        value: cdktf.booleanToHclTerraform(this._restrictedToWorkflows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_repository_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      selected_workflows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedWorkflows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
