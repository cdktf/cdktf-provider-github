# `actionsRunnerGroup` Submodule <a name="`actionsRunnerGroup` Submodule" id="@cdktf/provider-github.actionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRunnerGroup <a name="ActionsRunnerGroup" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group github_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_runner_group

actionsRunnerGroup.ActionsRunnerGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  visibility: str,
  id: str = None,
  selected_repository_ids: typing.List[typing.Union[int, float]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#id ActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of repository IDs that can access the runner group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#id ActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `selected_repository_ids`<sup>Optional</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds">reset_selected_repository_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_selected_repository_ids` <a name="reset_selected_repository_ids" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds"></a>

```python
def reset_selected_repository_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_runner_group

actionsRunnerGroup.ActionsRunnerGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_runner_group

actionsRunnerGroup.ActionsRunnerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_runner_group

actionsRunnerGroup.ActionsRunnerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories">allows_public_repositories</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited">inherited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows">restricted_to_workflows</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl">runners_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl">selected_repositories_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows">selected_workflows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput">selected_repository_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allows_public_repositories`<sup>Required</sup> <a name="allows_public_repositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories"></a>

```python
allows_public_repositories: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited"></a>

```python
inherited: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restricted_to_workflows`<sup>Required</sup> <a name="restricted_to_workflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows"></a>

```python
restricted_to_workflows: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `runners_url`<sup>Required</sup> <a name="runners_url" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl"></a>

```python
runners_url: str
```

- *Type:* str

---

##### `selected_repositories_url`<sup>Required</sup> <a name="selected_repositories_url" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl"></a>

```python
selected_repositories_url: str
```

- *Type:* str

---

##### `selected_workflows`<sup>Required</sup> <a name="selected_workflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows"></a>

```python
selected_workflows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `selected_repository_ids_input`<sup>Optional</sup> <a name="selected_repository_ids_input" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput"></a>

```python
selected_repository_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `selected_repository_ids`<sup>Required</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds"></a>

```python
selected_repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRunnerGroupConfig <a name="ActionsRunnerGroupConfig" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_runner_group

actionsRunnerGroup.ActionsRunnerGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  visibility: str,
  id: str = None,
  selected_repository_ids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#id ActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of repository IDs that can access the runner group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#id ActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `selected_repository_ids`<sup>Optional</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds"></a>

```python
selected_repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---



