# `github_actions_environment_variable`

Refer to the Terraform Registory for docs: [`github_actions_environment_variable`](https://www.terraform.io/docs/providers/github/r/actions_environment_variable).

# `actionsEnvironmentVariable` Submodule <a name="`actionsEnvironmentVariable` Submodule" id="@cdktf/provider-github.actionsEnvironmentVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentVariable <a name="ActionsEnvironmentVariable" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable github_actions_environment_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_variable

actionsEnvironmentVariable.ActionsEnvironmentVariable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  repository: str,
  value: str,
  variable_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.value">value</a></code> | <code>str</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.variableName">variable_name</a></code> | <code>str</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#id ActionsEnvironmentVariable#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.environment"></a>

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#environment ActionsEnvironmentVariable#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.repository"></a>

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#repository ActionsEnvironmentVariable#repository}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.value"></a>

- *Type:* str

Value of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#value ActionsEnvironmentVariable#value}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.variableName"></a>

- *Type:* str

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#variable_name ActionsEnvironmentVariable#variable_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#id ActionsEnvironmentVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_variable

actionsEnvironmentVariable.ActionsEnvironmentVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_variable

actionsEnvironmentVariable.ActionsEnvironmentVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_variable

actionsEnvironmentVariable.ActionsEnvironmentVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentVariableConfig <a name="ActionsEnvironmentVariableConfig" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_variable

actionsEnvironmentVariable.ActionsEnvironmentVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  repository: str,
  value: str,
  variable_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.environment">environment</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.repository">repository</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.value">value</a></code> | <code>str</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.variableName">variable_name</a></code> | <code>str</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#id ActionsEnvironmentVariable#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#environment ActionsEnvironmentVariable#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#repository ActionsEnvironmentVariable#repository}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#value ActionsEnvironmentVariable#value}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#variable_name ActionsEnvironmentVariable#variable_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_environment_variable#id ActionsEnvironmentVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



