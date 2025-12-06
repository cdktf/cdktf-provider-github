# `enterpriseActionsWorkflowPermissions` Submodule <a name="`enterpriseActionsWorkflowPermissions` Submodule" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsWorkflowPermissions <a name="EnterpriseActionsWorkflowPermissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions(
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
  can_approve_pull_request_reviews: bool | IResolvable = None,
  default_workflow_permissions: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.canApprovePullRequestReviews">can_approve_pull_request_reviews</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether GitHub Actions can approve pull request reviews. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.defaultWorkflowPermissions">default_workflow_permissions</a></code> | <code>str</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.enterpriseSlug"></a>

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#enterprise_slug EnterpriseActionsWorkflowPermissions#enterprise_slug}

---

##### `can_approve_pull_request_reviews`<sup>Optional</sup> <a name="can_approve_pull_request_reviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.canApprovePullRequestReviews"></a>

- *Type:* bool | cdktf.IResolvable

Whether GitHub Actions can approve pull request reviews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#can_approve_pull_request_reviews EnterpriseActionsWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `default_workflow_permissions`<sup>Optional</sup> <a name="default_workflow_permissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.defaultWorkflowPermissions"></a>

- *Type:* str

The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#default_workflow_permissions EnterpriseActionsWorkflowPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetCanApprovePullRequestReviews">reset_can_approve_pull_request_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetDefaultWorkflowPermissions">reset_default_workflow_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_can_approve_pull_request_reviews` <a name="reset_can_approve_pull_request_reviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```python
def reset_can_approve_pull_request_reviews() -> None
```

##### `reset_default_workflow_permissions` <a name="reset_default_workflow_permissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```python
def reset_default_workflow_permissions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseActionsWorkflowPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseActionsWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviewsInput">can_approve_pull_request_reviews_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissionsInput">default_workflow_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlugInput">enterprise_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviews">can_approve_pull_request_reviews</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissions">default_workflow_permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `can_approve_pull_request_reviews_input`<sup>Optional</sup> <a name="can_approve_pull_request_reviews_input" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```python
can_approve_pull_request_reviews_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `default_workflow_permissions_input`<sup>Optional</sup> <a name="default_workflow_permissions_input" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```python
default_workflow_permissions_input: str
```

- *Type:* str

---

##### `enterprise_slug_input`<sup>Optional</sup> <a name="enterprise_slug_input" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlugInput"></a>

```python
enterprise_slug_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `can_approve_pull_request_reviews`<sup>Required</sup> <a name="can_approve_pull_request_reviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```python
can_approve_pull_request_reviews: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `default_workflow_permissions`<sup>Required</sup> <a name="default_workflow_permissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```python
default_workflow_permissions: str
```

- *Type:* str

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsWorkflowPermissionsConfig <a name="EnterpriseActionsWorkflowPermissionsConfig" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import enterprise_actions_workflow_permissions

enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enterprise_slug: str,
  can_approve_pull_request_reviews: bool | IResolvable = None,
  default_workflow_permissions: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.canApprovePullRequestReviews">can_approve_pull_request_reviews</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether GitHub Actions can approve pull request reviews. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.defaultWorkflowPermissions">default_workflow_permissions</a></code> | <code>str</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#enterprise_slug EnterpriseActionsWorkflowPermissions#enterprise_slug}

---

##### `can_approve_pull_request_reviews`<sup>Optional</sup> <a name="can_approve_pull_request_reviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```python
can_approve_pull_request_reviews: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether GitHub Actions can approve pull request reviews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#can_approve_pull_request_reviews EnterpriseActionsWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `default_workflow_permissions`<sup>Optional</sup> <a name="default_workflow_permissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```python
default_workflow_permissions: str
```

- *Type:* str

The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#default_workflow_permissions EnterpriseActionsWorkflowPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



