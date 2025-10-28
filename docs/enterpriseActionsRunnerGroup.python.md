# `enterpriseActionsRunnerGroup` Submodule <a name="`enterpriseActionsRunnerGroup` Submodule" id="@cdktf/provider-github.enterpriseActionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsRunnerGroup <a name="EnterpriseActionsRunnerGroup" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enterprise_slug: str,
  name: str,
  visibility: str,
  allows_public_repositories: bool | IResolvable = None,
  id: str = None,
  restricted_to_workflows: bool | IResolvable = None,
  selected_organization_ids: typing.List[typing.Union[int, float]] = None,
  selected_workflows: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.allowsPublicRepositories">allows_public_repositories</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.restrictedToWorkflows">restricted_to_workflows</a></code> | <code>bool \| cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedOrganizationIds">selected_organization_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedWorkflows">selected_workflows</a></code> | <code>typing.List[str]</code> | List of workflows the runner group should be allowed to run. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.enterpriseSlug"></a>

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `allows_public_repositories`<sup>Optional</sup> <a name="allows_public_repositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.allowsPublicRepositories"></a>

- *Type:* bool | cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restricted_to_workflows`<sup>Optional</sup> <a name="restricted_to_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.restrictedToWorkflows"></a>

- *Type:* bool | cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `selected_organization_ids`<sup>Optional</sup> <a name="selected_organization_ids" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedOrganizationIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `selected_workflows`<sup>Optional</sup> <a name="selected_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.selectedWorkflows"></a>

- *Type:* typing.List[str]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories">reset_allows_public_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows">reset_restricted_to_workflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds">reset_selected_organization_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows">reset_selected_workflows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allows_public_repositories` <a name="reset_allows_public_repositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```python
def reset_allows_public_repositories() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_restricted_to_workflows` <a name="reset_restricted_to_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```python
def reset_restricted_to_workflows() -> None
```

##### `reset_selected_organization_ids` <a name="reset_selected_organization_ids" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds"></a>

```python
def reset_selected_organization_ids() -> None
```

##### `reset_selected_workflows` <a name="reset_selected_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows"></a>

```python
def reset_selected_workflows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl">runners_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl">selected_organizations_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput">allows_public_repositories_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput">enterprise_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput">restricted_to_workflows_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput">selected_organization_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput">selected_workflows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories">allows_public_repositories</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows">restricted_to_workflows</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds">selected_organization_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows">selected_workflows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `runners_url`<sup>Required</sup> <a name="runners_url" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl"></a>

```python
runners_url: str
```

- *Type:* str

---

##### `selected_organizations_url`<sup>Required</sup> <a name="selected_organizations_url" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl"></a>

```python
selected_organizations_url: str
```

- *Type:* str

---

##### `allows_public_repositories_input`<sup>Optional</sup> <a name="allows_public_repositories_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```python
allows_public_repositories_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enterprise_slug_input`<sup>Optional</sup> <a name="enterprise_slug_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput"></a>

```python
enterprise_slug_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `restricted_to_workflows_input`<sup>Optional</sup> <a name="restricted_to_workflows_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```python
restricted_to_workflows_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `selected_organization_ids_input`<sup>Optional</sup> <a name="selected_organization_ids_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput"></a>

```python
selected_organization_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `selected_workflows_input`<sup>Optional</sup> <a name="selected_workflows_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```python
selected_workflows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `allows_public_repositories`<sup>Required</sup> <a name="allows_public_repositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories"></a>

```python
allows_public_repositories: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `restricted_to_workflows`<sup>Required</sup> <a name="restricted_to_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows"></a>

```python
restricted_to_workflows: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `selected_organization_ids`<sup>Required</sup> <a name="selected_organization_ids" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds"></a>

```python
selected_organization_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `selected_workflows`<sup>Required</sup> <a name="selected_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows"></a>

```python
selected_workflows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsRunnerGroupConfig <a name="EnterpriseActionsRunnerGroupConfig" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_runner_group

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enterprise_slug: str,
  name: str,
  visibility: str,
  allows_public_repositories: bool | IResolvable = None,
  id: str = None,
  restricted_to_workflows: bool | IResolvable = None,
  selected_organization_ids: typing.List[typing.Union[int, float]] = None,
  selected_workflows: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories">allows_public_repositories</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows">restricted_to_workflows</a></code> | <code>bool \| cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds">selected_organization_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows">selected_workflows</a></code> | <code>typing.List[str]</code> | List of workflows the runner group should be allowed to run. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `allows_public_repositories`<sup>Optional</sup> <a name="allows_public_repositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```python
allows_public_repositories: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restricted_to_workflows`<sup>Optional</sup> <a name="restricted_to_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```python
restricted_to_workflows: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `selected_organization_ids`<sup>Optional</sup> <a name="selected_organization_ids" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds"></a>

```python
selected_organization_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `selected_workflows`<sup>Optional</sup> <a name="selected_workflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```python
selected_workflows: typing.List[str]
```

- *Type:* typing.List[str]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---



